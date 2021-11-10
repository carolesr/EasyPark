using EasyPark.Models;
using EasyPark.Models.DTOs;

namespace EasyPark.Services.Interfaces
{
    public interface IEstablishmentService
    {
        public Response GetAll();
        public Response GetEstablishment(string establishmentId);
        public Response SetSpotStatus(UpdateSpotStatus spot);
    }
}
