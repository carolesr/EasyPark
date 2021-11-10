using System.Threading.Tasks;

namespace EasyPark.Hubs.Interfaces
{
    public interface IRobotHub
    {
        public Task SendSpot(string spot);
    }
}
