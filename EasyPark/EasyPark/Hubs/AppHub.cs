using EasyPark.Hubs.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using EasyPark.Models.Entities;

namespace EasyPark.Hubs
{
    public class AppHub : Hub, IAppHub
    {
        public AppHub() { }

        public async Task NotifyNewSession(Session session)
        {
            await Clients.All.SendAsync("NewSession", session);
        }

        public async Task NotifySessionFinished(Session session)
        {
            await Clients.All.SendAsync("SessionFinished", session);
        }

        public void NotifySpotOccupied(string spot)
        {
            var result = Clients.All.SendAsync("SpotSet", spot);
        }
    }
}
