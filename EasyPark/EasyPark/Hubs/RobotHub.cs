using EasyPark.Hubs.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace EasyPark.Hubs
{
    public class RobotHub : Hub, IRobotHub
    {
        public RobotHub() { }

        public async Task SendSpot(string spot)
        {
            await Clients.All.SendAsync("CarHasParked", spot);
        }
    }
}
