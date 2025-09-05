from http.server import HTTPServer, BaseHTTPRequestHandler
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    
    def do_POST(self):
        if self.path == '/login':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)
            
            username = data.get('username')
            password = data.get('password')
            
            if username == 'erickcationi' and password == '03112008':
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = {'success': True, 'message': 'Login bem-sucedido'}
                self.wfile.write(json.dumps(response).encode())
            else:
                self.send_response(401)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = {'success': False, 'message': 'Credenciais inválidas'}
                self.wfile.write(json.dumps(response).encode())

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Servidor iniciado na porta {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()