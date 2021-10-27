using EasyPark.Models.Entities;
using EasyPark.Models;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public Response GetAll();
        public Response CreateUser(User user);
    }
}
