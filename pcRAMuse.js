const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;

  const tRAM = totalmem() / 1024 / 1024;
  const fRAM = freemem() / 1024 / 1024;
  const uSage = (fRAM / tRAM) * 100;
  const status = {
    Os: platform(),
    arch: arch(),
    totalRAM: `${parseInt(tRAM)}MB`,
    freeRAM: `${parseInt(fRAM)}MB`,
    usage: `${uSage.toFixed(2)}%`,
  };

  console.clear();
  console.table(status);
}, 1000);
