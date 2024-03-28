import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../Utility/Utility";
import ViewReadToPages from "../ViewReadToPages/ViewReadToPages";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';



const PagesToRead = () => {


    const books = useLoaderData()


    const [booksListed, setBooksListed] = useState([])

    useEffect(() => {
        const storedBookIds = getStoredBookApplication()
        if (books.length > 0) {

            // const booksListed = books.filter(book => storedBookIds.includes(book.bookId) )

            const booksListed = []
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId)

                if (book) {
                    booksListed.push(book)
                }
            }
            setBooksListed(booksListed)

            console.log(books, storedBookIds, booksListed[2].totalPages)
        }
    }, [books])








    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page nB',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];



    // const getPath = (x, y, width, height) => {
    //     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    //     ${x + width / 2}, ${y}
    //     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    //     Z`;
    // };

    // const TriangleBar = (props) => {
    //     const { fill, x, y, width, height } = props;

    //     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    // };


    return (
        <div>
            



            <BarChart
                width={600}
                height={500}
                data={booksListed}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="totalPages">
                
                </Bar>
            </BarChart>




            

        </div>
    );
};

export default PagesToRead;