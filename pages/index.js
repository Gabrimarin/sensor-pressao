import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "../components/Image";

export default function Home() {
  return (
    <Box>
      <Typography variant="h3" color="primary">
        Sensor de pressão
      </Typography>
      <Typography variant="h5" color="primary">
        MPX5700AP
      </Typography>
      <Typography>
        É um sensor de pressão absoluta (AP) capaz de medir a pressão em gases
        entre 15kPa e 700kPa. Apesar de possuir 6 pinos, apenas 3 deles são
        suficientes para começar a fazer medições:
      </Typography>
      <Typography variant="h5" color="primary">
        Pinos
      </Typography>
      <Image
        src={"/images/sensor.png"}
        legend="Indicação dos pinos do sensor. Observe que no sensor absoluto existe
            apenas uma entrada para a pressão."
        size={[1192, 900]}
      />
      <Box mx={"10%"} my={"4%"}>
        <Box>
          <Typography color="primary" fontWeight="bold">
            {"VCC"}
          </Typography>{" "}
          É o pino de alimentação do sensor, devendo ser ligado no pino VCC do
          arduino, lembrando que a tensão de alimentação do sensor é de 5V.
        </Box>
        <Box>
          <Typography color="primary" fontWeight="bold">
            GND
          </Typography>
          <Typography>
            É o terra, devendo ser ligado ao GND do Arduino.
          </Typography>
        </Box>
        <Box>
          <Typography color="primary" fontWeight="bold">
            SAÍDA
          </Typography>
          É o pino que informará a variação na tensão de acordo com a pressão
          medida no sensor, com índice médio de 6.4mV por kPa. Deve ser ligada a
          uma das entradas analógicas do Arduino.
        </Box>
      </Box>
      <Typography variant="h5" color="primary">
        Características importantes
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Antes de usar qualquer tipo de sensor, é importante consultar as
        informações que o fabricante disponibiliza. Desta forma, podemos ter
        certeza que o componente que se deseja utilizar é ou não ideal para
        nossa aplicação, e também é possível evitar muitos problemas, como mal
        funcionamento e até mesmo a perda do componente. Abaixo estão algumas
        características importantes do sensor MPX5700AP que foram retiradas
        diretamente de seu <i>Datasheet</i>:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "white" }}>
                Característica
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "white" }}>
                Mínimo
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "white" }}>
                Máximo
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                caracteristica: "Medição de pressão",
                min: "15kPa",
                max: "700kPa",
              },
              {
                caracteristica: "Tensão de alimentação",
                min: "4.75V",
                max: "5.25V",
              },
              {
                caracteristica: "Corrente de alimentação",
                min: "-",
                max: "10mA (DC)",
              },
              {
                caracteristica: "Precisão de medição",
                min: "-",
                max: "±2.5%",
              },
              {
                caracteristica: "Compensação de tensão para pressão mínima ¹",
                min: "0.184V",
                max: "0.409V",
              },
              {
                caracteristica: "Tensão na pressão máxima ²",
                min: "4.587V",
                max: "4.813V",
              },
              {
                caracteristica: "Sensibilidade",
                min: "-",
                max: "6.4mV/kPa",
              },
              {
                caracteristica: "Temperatura de operação",
                min: "-40°C",
                max: "+125°C",
              },
            ].map((row, index) => (
              <TableRow
                style={index % 2 === 1 ? { background: "#f2f2f2" } : {}}
                key={row.caracteristica}
              >
                <TableCell style={{ fontWeight: "bold" }}>
                  {row.caracteristica}
                </TableCell>
                <TableCell>{row.min}</TableCell>
                <TableCell>{row.max}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        <i>
          ¹ A tensão de saída quando a pressão nominal for mínima.
          <br />² A tensão de saída quando a pressão nominal for máxima.
        </i>
      </Typography>
    </Box>
  );
}
