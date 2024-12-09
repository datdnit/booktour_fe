import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, ImageList, ImageListItem, TextField } from '@material-ui/core';



export default function TourAdd() {
    const itemData = [
        { img: "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-mon-trang-mi-ng-thanh-l-ch-trong-l-v-i-h-t-d-c-i-va-hoa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", title: "" },
        { img: "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-mon-trang-mi-ng-thanh-l-ch-trong-l-v-i-h-t-d-c-i-va-hoa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", title: "" },
        { img: "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-mon-trang-mi-ng-thanh-l-ch-trong-l-v-i-h-t-d-c-i-va-hoa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", title: "" },
        { img: "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-mon-trang-mi-ng-thanh-l-ch-trong-l-v-i-h-t-d-c-i-va-hoa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", title: "" },
        { img: "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-mon-trang-mi-ng-thanh-l-ch-trong-l-v-i-h-t-d-c-i-va-hoa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load", title: "" },
    ]
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                    <form noValidate autoComplete="off">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Thêm mới chuyến đi
                            </Typography>
                            <Grid container spacing={3} style={{ marginTop: 10 }}>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Tên chuyến đi" variant="filled" />
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Khoảng thời gian" variant="filled" />
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Đường bay" variant="filled" />
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Cổng xuất phát" variant="filled" />
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Ngày khởi hành" variant="filled" type='date' value={"2024-11-11"}/>
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Khách hàng" variant="filled" />
                                </Grid>
                                <Grid item lg={3} md={4} sm={12}>
                                    <TextField fullWidth id="filled-basic" label="Đơn giá" variant="filled" />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} >
                                    <TextField fullWidth id="filled-basic" label="Miêu tả" variant="filled" multiline minRows={3} maxRows={5} />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} >
                                    <Button variant="contained" color="primary" size="small">Tải ảnh lên</Button>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} >
                                    <ImageList rowHeight={160} cols={3}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img} cols={item.cols || 1}>
                                                <img src={item.img} alt={item.title} />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <Button variant="contained" color="primary" size="small">Thêm mới</Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}
