using System.Collections.Generic;

namespace EasyPark.Models.DTOs
{
    public class EstablishmentDTO
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public List<PriceDTO> Prices { get; set; }

        public List<SpotDTO> Spots { get; set; }
    }
}
