import { Cell, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;

const needle = ({ value, data, cx, cy, iR, oR, color }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  const ang = -180 * (value / total);
  const length = (iR +  oR) / 2;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 15;


  
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * Math.cos(RADIAN * (180 - ang));
  const yp = y0 - length * Math.sin(RADIAN * (180 - ang));

  return (
    <>
    <circle  cx={x0} cy={y0} r={r} fill={color}/>,
    <path
      d={`M${xba} ${yba} L${xbb} ${ybb} L${xp} ${yp} Z`}
      fill={color}
      />,
      </>
  );
};

const  PieChartsWithNeedle = ({
 width = 400,
 height = 250,
 value = 60,
 chartData = [
  {name: "A", value: 60, color: "#e15825"},
  {name: "B", value: 10, color: "#f18200"},
  {name: "C", value: 10, color: "#fcd800"},
  {name: "D", value: 10, color: "#a9d161"},
  {name: "E", value: 10, color: "#009900"},
 ],
 needleColor = "#333",

}) => 
  {
  const cx = width / 2;
  const cy = height - 20;
  const iR = 150;
  const oR = 180;

  return (
    <div className="flex flex-col items-center">
    <PieChart width={width} height={height}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        stroke="none"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle({ value, data: chartData, cx, cy, iR, oR, color: needleColor })}
    </PieChart>
    <p className="mt-2 font-semibold text-gray-700 text-lg">{value}</p>
        </div>
  );
};


export default PieChartsWithNeedle;