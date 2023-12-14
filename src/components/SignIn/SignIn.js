import React, { useState, useEffect, useRef } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import info from "../../assets/info.png";
import Google from "../../assets/Google.png";
import Microsoft from "../../assets/Microsoft.svg";
import { login, fetchLogoImage } from "../../network/Login";
import { GoogleLogin } from "react-google-login";
import { setUserData, setLogoImage } from "../../store/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PublicClientApplication } from "@azure/msal-browser";
import MicrosoftLogin from "react-microsoft-login";
import { pca } from "./authConfig";
import AccountServices from "../APIs/AccountServices";
import { fetchToken } from "../APIs/LogInApi";
import refreshToken from '../APIs/UsersApi';
import { Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showErrorMessages, setShowErrorMessages] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginProvider, setLoginProvider] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [utcOffset, setUtcOffset] = useState(new Date().getTimezoneOffset());
  const [loadTime, setLoadTime] = useState(0);
  const [localIp, setLocalIp] = useState("");
  const [loginProviderMicro, setLoginProviderMicro] = useState(null);
  const [resp, setResp] = useState(null);
  const [emailValidationError, setEmailValidationError] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subdomain, setSubdomain] = useState("");

  const responseGoogle = (response) => {
    if (response.profileObj) {
      console.log("Google Sign-In successful:", response.profileObj);
      setLoginProvider("google");
    } else {
      console.log("not successful");
    }
  };

  // const handleMicrosoftLogin = async () => {
  //   try {
  //     const response = await pca.loginPopup({
  //       scopes: ['openid', 'profile', 'User.Read'],
  //     });

  //     if (response.account) {
  //       console.log('Microsoft Sign-In successful:', response.account);
  //       setLoginProviderMicro('microsoft');
  //     } else {
  //       console.log('Microsoft Sign-In not successful');
  //     }
  //   } catch (error) {
  //     console.error('Error logging in with Microsoft:', error);
  //   }
  // };

  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const handleMicrosoftLogin = async () => {
    try {
      const loginResponse = await pca.loginPopup({
        scopes: ["openid", "profile", "User.Read"],
      });

      if (loginResponse.account) {
        console.log("Microsoft Sign-In successful:", loginResponse.account);
        setLoginProviderMicro("microsoft");
      } else {
        console.log("Microsoft Sign-In not successful");
      }
    } catch (error) {
      console.error("Error logging in with Microsoft:", error);
    }
  };
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await fetchToken();
        console.log('Token:', token);
      
      } catch (error) {
        console.error('Error fetching token:', error.message);
      }
    };

    getToken();

  
  }, []); 
 
  useEffect(() => {
    AccountServices.getLogo(token)
    .then((res) => {
        console.log(res);
      }).catch((err)=>{
        console.log("Error ===>", err.errorMessage);
      });
    
    // fetch("https://saumendra.irslogics.kitchen/users/test/Users/GetLogo", {
      
    //   mode: "no-cors",
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result.isSuccess) {
    //       setData(result.result);
    //     } else if (!result.isSuccess) {
    //       setData(result.result);
    //     } else {
    //       setError("An error occurred while fetching data");
    //     }
    //   })
    //   .catch((error) => {
    //     setError("No logo available");
    //   });
  }, []);

  useEffect(() => {
    const startLoadTime = performance.now();
    const offsetMinutes = new Date().getTimezoneOffset();
    setUtcOffset(offsetMinutes);

    const loadTime = new Date().toISOString();
    setLoadTime(loadTime);

    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setLocalIp(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching local IP:", error);
      })
      .finally(() => {
        const endLoadTime = performance.now();
        setLoadTime(endLoadTime - startLoadTime);
      });
  }, []);

  const handleSendEmail = async () => {
    setEmailValidationError("");

    if (!validateEmail(email)) {
      setEmailValidationError("Please enter a valid email address");
      return;
    }

    setShowForgotPasswordPopup(false);
    setShowInfoPopup(true);

    try {
      const encodedEmail = encodeURIComponent(email);
      const url = `http://localhost:5035/forgotpwd/api/Login/ForgotPassword?email=${encodedEmail}`;

      const response = await fetch(url, {
        method: "POST",
      });

      if (response.ok) {
        const responseData = await response.json();
        if (!responseData.isError) {
          setResp(responseData.result);
          console.log("Email sent successfully:", responseData.result);
        } else {
          setResp(responseData.result);
          console.error("Error sending email:", responseData.errorMessage);
        }
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      if (!resetToken || !newPassword || !confirmPassword || !subdomain) {
        console.error("Please fill in all fields.");
        return;
      }

      if (newPassword !== confirmPassword) {
        console.error("Passwords do not match.");
        return;
      }

      const requestBody = {
        token: resetToken,
        password: newPassword,
        confirmPassword: confirmPassword,
        subdomain: subdomain,
      };

      const response = await fetch(
        "http://localhost:5035/resetpwd/api/Login/ResetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (!responseData.isError) {
          console.log("Password updated successfully:", responseData.result);
        } else {
          console.error("Error updating password:", responseData.errorMessage);
        }
      } else {
        console.error("Error updating password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };
  const handleGoogleSignIn = () => {
    const clientId = "YOUR_GOOGLE_CLIENT_ID";
    const redirectUri = encodeURIComponent(
      "https://accounts.google.com/o/oauth2/v2/auth?scope=email&amp;include_granted_scopes=true&amp;redirect_uri=https://sandbox.irslogics.com/publicapi/Login/GetExternalLoginWithGoogle&amp;response_type=code&amp;client_id=339174057490-i1u0k0vq0i0lppirgqa3rpvjilnt8dj3.apps.googleusercontent.com"
    );

    const googleSignInUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=email&include_granted_scopes=true&redirect_uri=${redirectUri}&response_type=token&client_id=${clientId}`;

    window.location.href = googleSignInUrl;
  };
  const handleCloseInfoPopup = () => {
    setShowInfoPopup(false);
    setShowErrorMessages(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
      return;
    }

    if (!password) {
      setPasswordError(true);
      return;
    }

    if (validateEmail(email) && validatePassword(password)) {
      try {
        const systemInfo = {
          utcOffSet: utcOffset,
          loadTime: Math.round(loadTime),
          localIP: localIp,
        };

        // const response = await fetch(
        //   "http://localhost:5035/test_login/api/Login/Login",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       email: email,
        //       password: password,
        //       utcOffSet: systemInfo.utcOffSet,
        //       loadTime: systemInfo.loadTime,
        //       localIP: systemInfo.localIP,
        //     }),
        //   }
        // );

        localStorage.getItem('token');
        AccountServices.login({ email: email, password: password })
        .then((res) => {
            if(res.status == 200){
            localStorage.setItem('token', res.data.jwToken);
            // return <Navigate to='/home' />
            
            navigate('/home');
            // { component: () => <Navigate to="/home" /> }
            // <Route path="/home" element={<Welcome />} />
            console.log(res);

            }
          }).catch((err)=>{
            console.log("Error ===>", err.errorMessage);
          });
        

        // AccountServices
        // .testApi({ email: "saumendra@irslogics.com", password: "irslogics123" })
        // .then((res) => {
        //   console.log("Test API Response ===>", res.data);
        // })
        // .catch((err) => {
        //   console.log("Error ===>", err.errorMessage);
        // });



// fetchToken({email: "saumendra@irslogics.com", password: "irslogics123"}).then((res)=>{
//   console.log("Test API Response ===>", res.data);
// }).catch((error)=>{
//   console.log("Error ===>", error.message);
// })

// refreshToken({email: "shilpa@logics.com", password: "irslogics123"}).then((res)=>{
//   console.log("Test API Response ===>", res.data);
// }).catch((error)=>{
//   console.log("Error ===>", error.message);
// })

// refreshToken('saumendra@irslogics.com', 'irslogics123')


        //   AccountServices.getPosts().then((res) => {
        //     //if(res.status == 200){
        //           console.log(res)
        //       //}
        // });

        // const responseData = await response.json();
        // console.log("Login response:", responseData);

        // if (responseData.isSuccess) {
        //   setShowInfoPopup(true);
        // } else {
        // }
      }
       catch (error) {
        console.error("Error logging in:", error);
      }
    }
    // if (validateEmail(email) && validatePassword(password)) {
    //   try {
        
    //     const token = await fetchToken();
  
    //     console.log('Token:', token);
  
    //     const systemInfo = {
    //       utcOffSet: utcOffset,
    //       loadTime: Math.round(loadTime),
    //       localIP: localIp,
    //       token: token, 
    //     };
  
    //   } catch (error) {
    //     console.error('Error logging in:', error);
    //   }
    // }
  };

  const handleLoginfn = async () => {
    try {
      const userData = await login(username, password);
      dispatch(setUserData(userData));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleFetchLogo = async () => {
    try {
      const imageUrl = await fetchLogoImage();
      dispatch(setLogoImage(imageUrl));
    } catch (error) {
      console.error("Fetching logo image failed:", error);
    }
    console.log("imageUrl");
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordPopup(true);
    setEmailError(false);
    setPasswordError(false);
  };

  const handleForgotPasswordSubmit = () => {
    setShowForgotPasswordPopup(false);
    setShowInfoPopup(true);
  };

  const handleClose = () => {
    setShowForgotPasswordPopup(false);
    setShowInfoPopup(false);
    setShowInfoPopup(false);
    setShowErrorMessages(false);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const renderLoginInfo = () => {
    if (loginProvider === "microsoft") {
      return (
        <div>
          <img src={Microsoft} alt="Microsoft Logo" />
          <p>Log In with Microsoft</p>
        </div>
      );
    } else if (loginProvider === "google") {
      return (
        <div>
          <img src={Google} alt="Google Logo" />
          <p>Log In with Google</p>
        </div>
      );
    }
  };
  useEffect(() => {
    const formGroups = document.querySelectorAll(".form-group");

    const handleGroupClick = (event) => {
      event.currentTarget.classList.toggle("active");
    };

    formGroups.forEach((group) => {
      group.addEventListener("click", handleGroupClick);
    });

    return () => {
      formGroups.forEach((group) => {
        group.removeEventListener("click", handleGroupClick);
      });
    };


  }, []);
  return (
    <div>
      <div></div>
      <div className="login-page">
        <div className="login-container">
          <div className="input_div_contents">
            <div className="lo_logo" style={{ marginTop: "-10px" }}>
              <div>
                {data ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: data }}
                    style={{ fontSize: "65px" }}
                  />
                ) : (
                  <div>
                    lo<span className="g_logo">g</span>ics
                  </div>
                )}
              </div>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="input_place input_2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  title="Email"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="input_place input_2"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("Password:", e.target.value);
                  }}
                  //   required
                  title="Password"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>

              <button
                className="buttonlog form-group"
                type="submit"
                onClick={handleLogin}
              >
                Log In
              </button>
              <div className="form-group1">
                <label className="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <div className="remember_txt"> Remember Me</div>
                </label>
                <button
                  className="forgot-password-button"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>
            </form>
            <div>
              <div className="btn_containerlog">
            
                <div className="btn_containerlog">
                  <button onClick={handleGoogleSignIn} className="google_btn">
                    <img
                      src={Google}
                      alt="Google Icon"
                      className="image_google"
                    />
                    <div className="text_google"> Log in with Google</div>
                  </button>
                </div>

              </div>

              {loginProvider === "microsoft" && (
                <div>
                  <img src={Microsoft} alt="Microsoft Logo" />
                  <p>Log In with Microsoft</p>
                </div>
              )}

              {loginProvider === "google" && (
                <div>
                  <img src={Google} alt="Google Logo" />
                  <p>Log In with Google</p>
                </div>
              )}
            </div>
           
          </div>
          {showErrorMessages && !showForgotPasswordPopup && !showInfoPopup && (
            <div>
              {emailError && (
                <p className="error-message">Please input your email</p>
              )}
              {passwordError && (
                <p className="error-message">Please input your password</p>
              )}
            </div>
          )}

        </div>

        {showForgotPasswordPopup && (
          <div className="popup">
            <div className="popup-content">
              <div className="recovery_close">
                <div className="heading_forgot">Forgot Password</div>
                <button className="close-button" onClick={handleClose}>
                  x
                </button>
              </div>
              <div className="inp_div">
                <div className="email-input2">
                  <FontAwesomeIcon icon={faEnvelope} className="mail_icon" />
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    value={email}
                    className="input_4"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {emailValidationError && (
                  <p className="error-message2">{emailValidationError}</p>
                )}
              </div>

              <div className="button_div">
                <button
                  className="button_submit"
                  onClick={handleSendEmail}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {showInfoPopup && (
          <div className="popup">
            <div className="popup-content2">
              <div>
                {" "}
                <div className="heading2">Password Recovery</div>
                <hr />
              </div>

              <div>
                <div className="content">
                  <FontAwesomeIcon icon={faInfoCircle} className="font_icon" />

                  {resp ? (
                    <div>{resp}</div>
                  ) : (
                    <div>Oops..Something went wrong...</div>
                  )}
                </div>
                <button className="ok_btn" onClick={handleCloseInfoPopup}>
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="copy_right">
          <p className="copy_txt">
            © 2023 Intellirose LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
