namespace Logics.API.DTO.Account
{
    public class LoginReq
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public int UtcOffSet { get; set; }
        public int LoadTime { get; set; }
        public string LocalIP { get; set; }
    }
    public class LoginResponse
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
    }
}
