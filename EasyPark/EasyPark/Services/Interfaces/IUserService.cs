using EasyPark.Models.DTOs;
using EasyPark.Models;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public Response GetAll();
        public Response CreateUser(UserDTO userDto);
    }
}
