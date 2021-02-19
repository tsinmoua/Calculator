import React from "react"
import { Button, makeStyles, Grid, Typography } from '@material-ui/core'

const Buttons = ({ input, onClick }) => {

    const useStyles = makeStyles({
        box: {
            width: '20rem',
            height: '5rem',
            color: 'white',
            backgroundColor: 'black',
            paddingLeft: '1rem'
        },
        numbers: {
            width: '5rem',
            height: '5rem',
            padding: '1rem',
            borderRadius: 0,
            backgroundColor: 'rgba(23, 0, 128)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        zero: {
            width: '10rem',
            height: '5rem',
            padding: '1rem',
            borderRadius: 0,
            backgroundColor: 'rgba(23, 0, 128)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        equal: {
            width: '5rem',
            height: '15rem',
            padding: '1rem',
            marginTop: '10rem',
            borderRadius: 0,
            backgroundColor: 'rgba(23, 0, 128)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem'
        },
        bottom: {
            marginLeft: '-5rem',
            marginTop: '-10rem'
        }
    })

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container direction='column' alignItems='center'>
                <Grid container alignItems='center' className={classes.box}>
                    <Typography variant='h3'>{input}</Typography>
                </Grid>
                <Grid item>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='/'>/</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='*'>*</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='-'>-</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='C'>C</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='7' value='7'>7</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='8'>8</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='9'>9</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='+'>+</Button>
                </Grid>
                <Grid item style={{ marginTop: '-10rem' }}>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='4'>4</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='5'>5</Button>
                    <Button variant='contained' className={classes.numbers} onClick={onClick} value='6'>6</Button>
                    <Button variant='contained' className={classes.equal} onClick={onClick} value='='>=</Button>
                </Grid>
                <Grid item className={classes.bottom}>
                    <Grid item>
                        <Button variant='contained' className={classes.numbers} onClick={onClick} value='1'>1</Button>
                        <Button variant='contained' className={classes.numbers} onClick={onClick} value='2'>2</Button>
                        <Button variant='contained' className={classes.numbers} onClick={onClick} value='3'>3</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' className={classes.zero} onClick={onClick} value='0'>0</Button>
                        <Button variant='contained' className={classes.numbers} onClick={onClick} value='.'>.</Button>
                    </Grid>
                </Grid>
            </Grid>

        </React.Fragment>
    )
};

export default Buttons;
