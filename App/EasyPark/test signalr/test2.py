from signalrcore.hub_connection_builder import HubConnectionBuilder
import logging

server_url = "https://easy-park-iw.herokuapp.com/robotHub"

hub_connection = HubConnectionBuilder()\
    .with_url(server_url)\
    .configure_logging(logging.DEBUG, socket_trace=True)\
    .with_automatic_reconnect({
        "type": "raw",
        "keep_alive_interval": 10,
        "reconnect_interval": 5,
        "max_attempts": 5
    }).build()
print('hub connection')
hub_connection.start()
print('start')

while 1:
    hub_connection.on("Teste", print)

hub_connection.stop()


# para testar, acessar essa url (pode ser pelo navegador mesmo)
#https://easy-park-iw.herokuapp.com/user/test?param=qualquertextoaqui