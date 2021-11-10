namespace EasyPark.Models.DTOs
{
    public class UpdateSpotStatus
    {
        public string SpotId { get; set; }
        public string EstablishmentId { get; set; }
        public bool Occupied { get; set; }
    }
}
