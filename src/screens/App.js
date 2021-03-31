// React imports
import { useState } from "react";

// Semantic react import
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";

// Css imports
import "../css/App.css";

// Image imports
import banner from "../img/banner.jpg";

// Dep import
import DynamicFont from "react-dynamic-font";

// Custom function imports
import useWindowWidth from "../functions/useWindowWidth";
import {
  noExponents,
  calculateOdds,
  handleScoreDisplay,
} from "../functions/useCustomFunctions";

// Global variables
const SPIN_PERCENTAGE_MAX = 99;
const SPIN_PERCENTAGE_MIN = 3;
const FONT_SIZE_MIN = 18;
const FONT_SIZE_MAX = 50;

function App() {
  const { windowWidth, windowHeight } = useWindowWidth();

  const [spinPercentage, setSpinPercentage] = useState(SPIN_PERCENTAGE_MIN);
  const [ACTUALSpinPercentage, setACTUALSpinPercentage] = useState(
    SPIN_PERCENTAGE_MIN
  );

  const handleChanceChange = (event, data) => {
    setSpinPercentage(data.value);
  };

  const handleChanceUpdate = () => {
    let value = parseInt(spinPercentage);
    let adjusted = false;

    if (value % 3 !== 0) {
      // Value is not divisible by 3

      if ((value + 1) % 3 === 0) {
        // Adding 1 to the value means its divisible, update it
        value = value + 1;
        adjusted = true;
      }

      if ((value - 1) % 3 === 0 && !adjusted) {
        // If the value has not been adjusted and subtracting 1 makes it divisible then adjust it
        value = value - 1;
        adjusted = true;
      }
    }

    if (value > SPIN_PERCENTAGE_MAX) {
      value = SPIN_PERCENTAGE_MAX;
    }

    if (value < SPIN_PERCENTAGE_MIN) {
      value = SPIN_PERCENTAGE_MIN;
    }

    setSpinPercentage(value);
    setACTUALSpinPercentage(value);
  };

  const calculateProbability = () => {
    let prob = 1;
    for (let i = 1; i < ACTUALSpinPercentage / 3 + 1; i++) {
      prob = prob * ((100 - i * 3) / 100);
    }
    return prob;
  };

  const details = [
    {
      name: "Odds 🎲",
      stat: (
        <>
          ~<sup>1</sup>
          &frasl;
          <sub>
            {calculateOdds(ACTUALSpinPercentage, calculateProbability()).bottom}
          </sub>
        </>
      ),
    },
    {
      name: "Rounds 🧾",
      stat: <>~{ACTUALSpinPercentage / 3} Games Played</>,
    },
    {
      name: "Score 💯",
      stat: <>"{handleScoreDisplay(ACTUALSpinPercentage)}"</>,
    },
  ];

  const imageSize = windowHeight / 2;
  const ContainerPaddingTop = imageSize - imageSize / 4;

  const HeaderFontSize =
    windowWidth > 400
      ? windowWidth < 992
        ? windowWidth / 22
        : FONT_SIZE_MAX
      : FONT_SIZE_MIN;
  const HeaderStatFontSize = HeaderFontSize / 2;

  return (
    <>
      <div
        className="banner"
        style={{
          resizeMode: "cover",
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          height: imageSize,
          width: "100%",
          position: "absolute",
        }}
      />

      <Container
        style={{
          paddingTop: ContainerPaddingTop,
          paddingRight: windowWidth > 1200 ? "6%" : "2%",
          paddingLeft: windowWidth > 1200 ? "6%" : "2%",
          marginBottom: 0,
          paddingBottom: 0,
        }}
        fluid
      >
        <Segment
          padded
          inverted
          style={{ backgroundImage: "linear-gradient(#1b1c1d, #212121)" }}
        >
          <Header style={{ fontSize: HeaderFontSize }} dividing inverted>
            Rainbow Six Seige Coin-flip Statistics 🧮
          </Header>
          <div>
            <Input
              action={
                <Button
                  onClick={handleChanceUpdate}
                  positive
                  icon
                  labelPosition="right"
                >
                  <Icon name="sync" />
                  Update
                </Button>
              }
              size="big"
              placeholder="Current Spin Chance Percentage"
              fluid
              type="number"
              min={SPIN_PERCENTAGE_MIN}
              max={SPIN_PERCENTAGE_MAX}
              value={spinPercentage}
              onChange={handleChanceChange}
            />
          </div>
          <Divider section />
          <Segment>
            <Header style={{ fontSize: HeaderStatFontSize }}>
              Chance Of Getting This Far:
            </Header>
            <div
              style={{
                width: "100%",
                fontSize: HeaderFontSize,
                lineHeight: 1,
                overflow: "hidden",
                fontWeight: "bold",
              }}
            >
              <DynamicFont
                content={
                  "~ " + noExponents(calculateProbability() * 100) + " %"
                }
              />
            </div>
          </Segment>
          <Divider hidden />
          <Segment.Group horizontal>
            {details.map((detail) => {
              return (
                <Segment>
                  <Header
                    textAlign="center"
                    style={{ fontSize: HeaderFontSize }}
                  >
                    {detail.name}
                  </Header>
                  <div
                    style={{
                      width: "100%",
                      fontSize: HeaderStatFontSize,
                      lineHeight: 2,
                      overflow: "hidden",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                  >
                    <DynamicFont content={detail.stat} />
                  </div>
                </Segment>
              );
            })}
          </Segment.Group>
        </Segment>
      </Container>
    </>
  );
}

export default App;
