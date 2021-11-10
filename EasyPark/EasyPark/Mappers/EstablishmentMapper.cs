using AutoMapper;
using EasyPark.Models.DTOs;
using EasyPark.Models.Entities;

namespace EasyPark.Mappers
{
    public class EstablishmentMapper : Profile
    {
        public EstablishmentMapper()
        {
            CreateMap<Establishment, EstablishmentDTO>().ReverseMap();
            CreateMap<Price, PriceDTO>().ReverseMap();
            CreateMap<Spot, SpotDTO>().ReverseMap();
        }
    }
}
