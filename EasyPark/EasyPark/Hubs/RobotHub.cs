using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace EasyPark.Hubs
{
    public class RobotHub : Hub
    {
        public RobotHub() { }

        public async Task Test(string param, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", param, message);
        }
    }
}
