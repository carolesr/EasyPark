using EasyPark.Models.DTOs;
using EasyPark.Models;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public Response GetAll();
        public Response GetUser(string email);
        public Response CreateUser(CreateUser newUser);
        public Response Login(Login login);
    }
}
