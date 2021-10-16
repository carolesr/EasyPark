using System;

namespace EasyPark.Models
{
    public class Session
    {
        public string Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Establishment { get; set; }
        public string Spot { get; set; }
        public double Value { get; set; }
        public string Card { get; set; }
    }
}
