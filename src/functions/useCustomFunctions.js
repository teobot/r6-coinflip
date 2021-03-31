export const noExponents = function (number) {
  var data = String(number).split(/[eE]/);
  if (data.length == 1) return data[0];
  var z = "",
    sign = number < 0 ? "-" : "",
    str = data[0].replace(".", ""),
    mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + "0.";
    while (mag++) z += "0";
    return z + str.replace(/^\-/, "");
  }
  mag -= str.length;
  while (mag--) z += "0";
  return str + z;
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const calculateOdds = (number, probability) => {
  return {
    top: 1,
    bottom: numberWithCommas(Math.round(100 / probability)),
  };
};

const betweenTwoNumber = (value, lower, upper) => {
  return value > lower && value < upper;
};

export const handleScoreDisplay = (userNumber) => {
  if (betweenTwoNumber(userNumber, 2, 13)) {
    return "Not Even Hard Silly 🍆";
  } else if (betweenTwoNumber(userNumber, 13, 23)) {
    return "Kinda Unlucky 😈";
  } else if (betweenTwoNumber(userNumber, 23, 33)) {
    return "Bad Luck Kiddo 💩";
  } else if (betweenTwoNumber(userNumber, 33, 43)) {
    return "Pretty Unlucky 🎀";
  } else if (betweenTwoNumber(userNumber, 43, 53)) {
    return "Super Unlucky 💰";
  } else if (betweenTwoNumber(userNumber, 53, 63)) {
    return "Ultra Unlucky ⭐";
  } else if (betweenTwoNumber(userNumber, 63, 73)) {
    return "Monster Unlucky 🌟";
  } else if (betweenTwoNumber(userNumber, 73, 83)) {
    return "God-Like Unlucky ✨";
  } else if (betweenTwoNumber(userNumber, 83, 100)) {
    return "Stop lying to me and yourself 🌠";
  }
};
