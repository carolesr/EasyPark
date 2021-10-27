namespace EasyPark.Models.DTOs
{
    public class SpotDTO
    {
        public double IdSensor { get; set; }

        public string Description { get; set; }

        public bool ForDisabled { get; set; }

        public bool ForElderly { get; set; }

        public bool Occupied { get; set; }
    }
}
