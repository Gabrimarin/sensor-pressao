import React from "react";
import { Box, Button, Card, Collapse, Typography } from "@mui/material";
import StopToThink from "../../components/StopToThink";
import Image from "../../components/Image";

const Primary = ({ children }) => {
  return (
    <Typography component="span" color="primary">
      {children}
    </Typography>
  );
};

const CardSecondary = ({ children }) => {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        width: "fit-content",
        padding: 4,
        margin: "auto",
        boxShadow: 7,
        my: 5,
      }}
    >
      {children}
    </Card>
  );
};

function Teoria() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Typography variant="h3" color="primary">Teoria</Typography>
      <Typography variant="h4"color="primary">O que é pressão? 🤔 </Typography>
      <Typography>
        Pressão nada mais é do que a relação entre uma <i>Força</i> e a{" "}
        <i>Área</i> em que esta força está distribuida. Matematicamente, a
        definição de Pressão é simplesmente:
      </Typography>
      <CardSecondary>
        <Typography align="center" variant="h5">
          Pressão = Força/Área
        </Typography>
        <Typography align="center">ou</Typography>
        <Typography align="center" variant="h5">
          P = F/A
        </Typography>
      </CardSecondary>
      <Typography>
        De acordo com esta relação matemática, podemos concluir que, quanto
        maior a força exercida, maior será a pressão. Também podemos dizer que
        quanto maior a área em que a força é aplicada, menor será a pressão.
      </Typography>
      <Typography variant="h4" color="primary">Unidades de Medida</Typography>
      <Typography>
        A unidade de medida padrão para a pressão no Sistema Internacional de
        Medidas é o PASCAL. Um Pascal equivale a um Newton por metro quadrado:
      </Typography>
      <CardSecondary>
        <Typography align="center" variant="h5">
          1Pa = N/m²
        </Typography>
      </CardSecondary>
      <Typography>
        Não é incomum encontrarmos também outras unidades, como o{" "}
        <Primary>PSI</Primary> (libras por polegada quadrada), que é o padrão
        inglês, e a unidade <Primary>atm</Primary>, que se relaciona com a
        PRESSÃO ATMOSFÉRICA.
      </Typography>
      <CardSecondary>
        <Typography align="center" variant="h5">
          1 PSI = 6894.76 Pa
          <br />1 atm = 101325 Pa
        </Typography>
      </CardSecondary>
      <Typography variant="h4" color="primary">Pare para pensar 💭</Typography>
      <Typography>
        Existem diversos exemplos do cotidiano que podem nos ajudar a entender
        melhor o conceito de pressão. A seguir, apresentamos três situações do
        cotidiano que envolvem conceitos de pressão, onde você poderá parar e
        pensar em como aplicar o que acabou de aprender.
      </Typography>
      <Box
        width="100%"
        alignItems="center"
        display="flex"
        justifyContent="center"
        marginTop={5}
        marginBottom={5}
      >
        <Button variant="contained" onClick={() => setOpen((prev) => !prev)} size="large">
          {open ? "Ocultar" : "Mostrar"} Exemplos
        </Button>
      </Box>
      <Collapse in={open}>
        <StopToThink
          title={'#1 - "Essa faca está cega! 🔪🧐'}
          question={`O que acontece quando você tenta cortar uma fruta com uma faca que não
está tão bem amolada? Será um trabalho mais difícil do que deveria. Pare
e pense: de acordo com a definição de pressão que vimos acima, por que
uma faca amolada corta com mais facilidade?`}
          image={"/images/cortando.jpg"}
          answer={`A resposta é que, quando amolamos a faca, estamos diminuindo a
        espessura da lâmina. Consequentemente, a área de
        contato da faca com a fruta diminui. E o que acontece quando a área da
        força diminui? A pressão aumenta. Com uma pressão maior, a faca
        penetra na fruta com mais facilidade.`}
        />
        <StopToThink
          title={"#2 - Medo de agulha? 💉😨"}
          question={`Se está aqui hoje lendo isso, você provavelmente já tomou um monte de
        agulhadas. Seja por meio de vacinas, injeções, exames ou doações de
        sangue, a agulha é uma das principais ferramentas para a manutenção da
        saúde. O motivo disso é claro: a agulha penetra facilmente nos tecidos
        do corpo. Mas pare e pense: Por que a enfermeira consegue inserir uma
        agulha no meu braço em um instante, mas nunca conseguiria inserir uma
        moeda?`}
          image={"/images/vacina.jpg"}
          answer={`A resposta é a mesma do primeiro exemplo: A agulha é um objeto muito
        fino, consequentemente a área de contato também. Portanto, para que a
        pressão seja suficiente para furar a pele, basta um pouco de força. Já
        uma moeda, apesar de não ser um objeto tão grande, teria uma área de
        contato muito maior com a pele, e a força necessária seria enorme (por
        mais estranho que pareça enfiar uma moeda no braço de alguém 😅).`}
        />
        <StopToThink
          title={"#3 - Berço de ferro 🥱😱"}
          question={`Os Faquires são um grupo de pessoas que decidiram viver de uma forma...
        Diferente. Além de pregarem a renúncia de certos prazeres e o controle
        da mente sobre o corpo, eles também praticam publicamente atos
        supostamente sobrenaturais de resistência, como deitar numa cama de
        pregos sem sofrer qualquer ferimento. Um desavisado poderia acreditar
        que estas pessoas têm uma pele muito resistente, ou que realmente é um
        milagre. Usando o conceito de pressão, pare e pense: Por que estas
        pessoas deitam em camas de prego e não se furam?`}
          image={"/images/faquir.jpg"}
          answer={`Já vimos nos exemplos acima que quando diminuimos a área de contato, a
        pressão aumenta e os objetos são penetrados mais facilmente. Porém, no
        caso dos faquires, o que acontece é o contrário: ao se deitarem numa
        cama de pregos, o que estão fazendo na verdade é distribuir o proprio
        peso sobre uma área muito grande, e portanto diminuindo a pressão
        exercida dos pregos sobre a pele. Com uma pressão pequena, o prego não
        conseguirá penetrar a pele. O que aconteceria se um faquir se deitasse
        sobre um único prego? Na verdade é melhor nem pensar... 😅`}
        />
      </Collapse>
      <Typography variant="h4" color="primary">
        O que é pressão diferencial e absoluta? 🤷🏻‍♂️
      </Typography>
      <Typography>
        Como vimos no início, o sensor MPX5700AP é um sensor de pressão
        ABSOLUTA. Isto significa que também existe outro tipo de pressão: a
        DIFERENCIAL.
      </Typography>
      <Typography variant="h5" color="primary">
        Pressão Absoluta
      </Typography>
      <Typography>
        Pressão absoluta é a diferença entre a pressão em uma determinada área e
        a pressão absoluta ("zero", vácuo completo). O barômetro, por exemplo, é
        um sensor que indica a pressão absoluta, pois mede a diferença entre a
        pressão atmosférica local e a pressão "zero" do vácuo que existe acima
        da coluna de mercúrio.
      </Typography>
      <Image
        src={"/images/barometro.png"}
        size={[1200, 1588]}
        containerSize={["30%", "100%"]}
        legend={"Um barômetro de mercúrio."}
      />
      <Typography variant="h5" color="primary">
        Pressão Diferencial
      </Typography>
      <Typography>
        A pressão diferencial é a diferença de pressão entre duas áreas
        diferentes. Porém, nenhuma delas é a pressão atmosférica. O sensor
        MPX5700DP mede a pressão diferencial. Este sensor possui duas entradas
        para pressão, em contraste com o nosso sensor que possui apenas uma.
        Pode-se diferenciar a pressão absoluta da pressão atmosférica com a
        indicação ABS.
      </Typography>
      <Typography variant="h4" color="primary">E o que é pressão atmosférica? 🤷🏻‍♂️</Typography>
      <Typography>
        A pressão atmosférica é a força que o ar exerce sobre uma área na
        superfície terrestre no nível do mar. Acima do nível do mar a pressão do
        ar vai diminuindo. Assim, quanto mais alto menor a pressão.
      </Typography>
      <Image src={"/images/atm.jpg"} size={[1522, 1080]} />
    </div>
  );
}

export default Teoria;
