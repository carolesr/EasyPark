using EasyPark.Models.DTOs;
using EasyPark.Models;

namespace EasyPark.Services.Interfaces
{
    public interface IUserService
    {
        public Response GetAll();
        public Response GetUser(string email);
        public Response CreateUser(CreateUser newUser);
        public Response UpdateUser(UpdateUser updateUser);
        public Response UpdateVehicles(UpdateVehicles updateVehicles);
        public Response UpdateCards(UpdateCards updateCards);
        public Response Login(Login login);
        public void TesteSignalR(string param);
    }
}
