import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, IconButton } from '@material-ui/core';
import TableCustom from '../component/table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TourOrder() {
    const [data, setData] = useState([{ name: "Txt" }, {}])
    const columns = [
        {
            title: 'STT', field: 'STT', align: "center", maxWidth: 40,
            render: row => row.tableData.id + 1
        },
        { title: 'Tên chuyến đi', field: 'name' },
        { title: 'Người đặt', field: 'customername' },
        { title: 'Số lượng', field: 'quantity', },
        { title: 'Trạng thái', field: 'status', },
        {
            title: 'Thao tác', field: 'action', align: "center", maxWidth: 80,
            render: row => {
                return <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton aria-label="edit" size='small' onClick={() => console.log(row)}>
                        < EditIcon color='primary' />
                    </IconButton>
                    <IconButton aria-label="delete" size='small' onClick={() => console.log(row)}>
                        < DeleteIcon color='error' />
                    </IconButton>
                </Box>
            }
        },
    ]
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                    <form noValidate autoComplete="off">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Danh sách đặt chuyến đi
                            </Typography>
                            <Grid container spacing={3} style={{ marginTop: 10 }}>
                                <Grid item lg={12} md={12} sm={12}>
                                    <TableCustom columns={columns} data={data} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}