using System.Collections.Generic;

namespace EasyPark.Models.DTOs
{
    public class UpdateVehicles
    {
        public string Email { get; set; }
        public List<VehicleDTO> Vehicles { get; set; }
    }
}
