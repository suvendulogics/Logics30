namespace Logics.API.DTO.APIResponse
{
    public class ApiResponse
    {
        public bool IsError { get; set; }
        public object Result { get; set; }
        public string ErrorMessage { get; set; }
    }
}
