using System.Collections.Generic;

namespace EasyPark.Models.DTOs
{
    public class UserDTO
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string CPF { get; set; }

        public string Phone { get; set; }

        public List<VehicleDTO> Vehicles { get; set; }

        public List<CardDTO> Cards { get; set; }

        public List<SessionDTO> Sessions { get; set; }
    }
}
