import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "../../components/Image";
import {
  calcVoltage,
  finalCode,
  readAnalog,
  setupCode,
} from "../../constants/codes";

const CodeWrapper = ({ code }) => {
  return (
    <Paper elevation={3}>
      <SyntaxHighlighter language="c" style={docco} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </Paper>
  );
};

function Aplicacao() {
  return (
    <div>
      <Typography variant="h3" color="primary">
        Aplicação 👨‍💻
      </Typography>
      <Typography>
        Agora que já aprendemos bastante sobre o sensor MPX5700DP e sobre o que
        é pressão, está na hora de ver como conectar o sensor a qualquer projeto
        eletrônico com o{" "}
        <Typography component="span" color="primary">
          Arduino
        </Typography>
      </Typography>
      <Typography variant="h4" color="primary">
        Setup
      </Typography>
      <Typography>
        Na base de todo programa em Arduino, teremos os mesmos blocos de código:
        setup e loop. No setup devemos configurar o projeto em relação ao
        Arduino. O loop é a função principal do programa, é nele que vamos
        computar toda a lógica do sensor de pressão.
      </Typography>
      <CodeWrapper code={setupCode} />
      <Typography>
        Com o projeto iniciado, a próxima pergunta a ser feita é: Como conectar
        e ler o sensor?
      </Typography>
      <Typography variant="h4" color="primary">
        Conectando o Sensor no Arduino
      </Typography>
      <Typography>
        Quando tratamos sobre as especificações do sensor, discutimos sobre seus
        3 principais pinos: VCC, GND e Saída (Out). A seguir está uma
        representação de como conectar cada pino ao Arduino, usando como exemplo
        um Arduino Uno.
      </Typography>
      <Image containerSize={["40%"]} src={"/images/sensorconectado.jpg"} />
      <Typography>
        Repare que o pino de Saída está conectado ao A0 do Arduino, que é a
        entrada analogica 0. Qualquer outra entrada analógica poderia ser usada,
        mas para ficar mais prático iremos sempre usar esta entrada.
      </Typography>
      <Typography variant="h4" color="primary">
        Lendo o sensor
      </Typography>
      <Typography>
        Agora que sabemos como conectar o sensor ao arduino, a seguir vemos como
        podemos ler os valores obtidos pelo sensor no nosso código:
      </Typography>
      <CodeWrapper code={readAnalog} />
      <Typography>
        O que fizemos até aqui simplesmente foi criar uma váriavel chamada
        "ler", que guardará o valor lido do sensor. No loop, atualizamos esta
        variável com o valor lido na porta analógica A0.
      </Typography>
      <Typography>
        Pode parecer que isto é o suficiente, mas na verdade ainda faltam alguns
        detalhes. O pino de saída do sensor MPX5700AP não está enviando um valor
        de pressão para o arduino, e sim uma tensão entre 0 e 5V. Por exemplo:
        caso a pressão medida pelo sensor seja máxima (700kPa, como vimos na
        tabela), o sensor enviará 5V para a entrada do Arduino. A função{" "}
        <i>analogRead</i> nos informará esta tensão com um número inteiro de 0 a
        1023.
      </Typography>
      <Image
      size={["40%"]}
        src={"/images/valores.png"}
      />
      <Typography>
        Com um pouco de regra de 3, podemos logo perceber que, para obter a
        voltagem, basta multiplicar o valor lido pelo valor de tensão de 5V e
        dividir por 1023.
      </Typography>
      <CodeWrapper code={calcVoltage} />
      <Typography>
        Vimos na tabela inicial que a compensação de tensão de pressão mínima
        varia entre 0.184V e 0.409V. Este parâmetro é imprescindível para que
        nossa medição seja precisa, portanto vamos guardar a média entre estes
        dois números (0.296V).
      </Typography>
      <Typography>
        Além deste parâmetro, também vimos que a tensão de pressão máxima é
        aproximadamente 4.6V, e a pressão máxima é aproximadamente 700kPa. Isto
        significa que para transformar a tensão de saída do sensor em pressão
        (kPa), basta multiplicá-la por 700 e dividi-la por 4.6, não esquecendo
        de subtrair a tensão de compensação.
      </Typography>
      <CodeWrapper code={finalCode} />
    </div>
  );
}

export default Aplicacao;
