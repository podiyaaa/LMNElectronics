using System;
namespace LMNElectronics.Models
{
    public class BaseResponseModel
    {
        public object Data { get; set; }
        public Error Error { get; set; }

        public BaseResponseModel()
        {
        }
    }

    public class Error
    {
        public string Code { get; set; }
        public string Message { get; set; }
    }
}
