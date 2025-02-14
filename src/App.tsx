import { motion } from "framer-motion";
import "./App.css";

const HeartPattern = () => {
  const generateHeart = (name: string) => {
    let output = [];

    for (let y = 10; y > -10; y--) {
      let line = "";
      for (let x = -20; x < 20; x++) {
        let equation = Math.pow(x * 0.08, 2) + Math.pow(y * 0.15, 2) - 1;
        let condition =
          Math.pow(equation, 3) -
            Math.pow(x * 0.08, 2) * Math.pow(y * 0.15, 3) <=
          0;

        line += condition ? name[Math.abs((x - y) % name.length)] : " ";
      }
      output.push(line);
    }
    return output;
  };

  return (
    <div
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {generateHeart("KoxaYou").map((line, index) => (
        <motion.div
          key={index}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-black text-red-500 font-mono">
      <HeartPattern />
    </div>
  );
}
