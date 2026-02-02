function generateCrashPoint() {
  const r = Math.random();
  const crash = 1 / r;
  return Math.max(1.01, crash).toFixed(2);
}

module.exports = { generateCrashPoint };
