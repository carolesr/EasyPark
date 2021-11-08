using AutoMapper;
using EasyPark.Models.DTOs;
using EasyPark.Models.Entities;

namespace EasyPark.Mappers
{
    public class UserMapper : Profile
    {
        public UserMapper()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<User, CreateUser>().ReverseMap();
            CreateMap<User, UpdateUser>().ReverseMap();
            CreateMap<Vehicle, VehicleDTO>().ReverseMap();
            CreateMap<Card, CardDTO>().ReverseMap();
            CreateMap<Session, SessionDTO>().ReverseMap();
        }
    }
}
