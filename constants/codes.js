export const setupCode = `void setup() {
  Serial.begin(9600); // inicia a porta serial, configura a taxa de dados para 9600 bps
}

void loop() {
  // Nenhuma lógica por enquanto!
}`;

export const readAnalog = `int ler;

void setup() {
  Serial.begin(9600); // inicia a porta serial, configura a taxa de dados para 9600 bps
}

void loop() {
  ler = analogRead(A0); // lê o valor da entrada analógica 0
}`;

export const calcVoltage = `int ler;
float voltagem;

void setup() {
  Serial.begin(9600); // inicia a porta serial, configura a taxa de dados para 9600 bps
}

void loop() {
  ler = analogRead(A0); // lê o valor da entrada analógica 0
  voltagem = (ler * 5) / 1023; // calcula a voltagem
}`;


export const finalCode = `int ler;
float voltagem;
float pressao;
float compensacao;
void setup() {
  Serial.begin(9600); // inicia a porta serial, configura a taxa de dados para 9600 bps
}

void loop() {
  ler = analogRead(A0); // lê o valor da entrada analógica 0
  voltagem = (ler * 5) / 1023; // calcula a voltagem
  compensacao = (0.184 + 0.409) / 2; // calcula a compensação
  pressao = ((voltagem - compensacao) * 700) / 4.6; // calcula a pressão em kPa
  Serial.println(pressao); // mostra a pressão
  delay(1000); // espera 1 segundo até a próxima leitura
}`;

