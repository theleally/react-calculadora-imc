export type Category = {
  name: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const categories: Category[] = [
  { name: "Magreza", color: "#96a3ab", icon: "down", imc: [0, 18.5] },
  { name: "Normal", color: "#0ead69", icon: "up", imc: [18.6, 24.9] },
  { name: "Sobrepeso", color: "#e2b039", icon: "down", imc: [25, 30] },
  { name: "Obesidade", color: "#c3423f", icon: "down", imc: [30.1, 99] },
];

export const calculateIMC = (weight: number, height: number) => {
  const imc = weight / (height * height);

  for (let i in categories) {
    if (imc >= categories[i].imc[0] && imc <= categories[i].imc[1]) {
      categories[i].yourImc = imc;
      return categories[i];
    }
  }
  return null;
};
