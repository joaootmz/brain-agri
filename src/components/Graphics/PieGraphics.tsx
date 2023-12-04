// import React, { PureComponent, ReactNode } from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Label,
//   LabelList,
//   PieLabelRenderProps,
// } from 'recharts';

// interface DataItem {
//   name: string;
//   value: number;
// }

// const data: DataItem[] = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = (props: PieLabelRenderProps): ReactNode => {
//     const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
  
//     if (
//       cx === undefined ||
//       cy === undefined ||
//       midAngle === undefined ||
//       innerRadius === undefined ||
//       outerRadius === undefined ||
//       percent === undefined ||
//       index === undefined
//     ) {
//       return null;
//     }
  
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
//     const numericPercent = typeof percent === 'number' ? percent : parseFloat(percent);
  
//     if (isNaN(numericPercent)) {
//       return null;
//     }
  
//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(numericPercent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };
// export default class Example extends PureComponent {

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//             <LabelList
//               dataKey="name"
//               position="outside"
//               fill="#8884d8"
//               // @ts-ignore
//               renderLabel={renderCustomizedLabel}
//             />
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
