import { useState } from 'react'
import Head from 'next/head'
import { Button, Message, Input, useResize } from '@iq/iq-ui-kit'
import { Stage, Layer, Rect } from 'react-konva'

export default function Index() {
  const [leftPower, setLeftPower] = useState(0.5)
  const [rightPower, setRightPower] = useState(0.5)

  return <>
    <Head>
      <title>Car Control</title>
    </Head>

    <div className={ 'sliders' }>
      <div className={ 'power-slider-wrapper' }>
        <Input
          max={ 1 }
          min={ 0 }
          value={ 0.5 }
          onChange={ setLeftPower }
          step={ 0.001 }
          name={ 'left' }
          type={ 'range' }
          orient="vertical"
          className={ 'power-slider left' }
        />

        <div className={ 'value' } style={{ top: Math.round((1 - leftPower) * 100) + '%' }} />
      </div>
      <div className={ 'power-slider-wrapper right' }>
        <Input
          max={ 1 }
          min={ 0 }
          value={ 0.5 }
          onChange={ setRightPower }
          step={ 0.001 }
          name={ 'right' }
          type={ 'range' }
          orient="vertical"
          className={ 'power-slider' }
        />

        <div className={ 'value' } style={{ top: Math.round((1 - rightPower) * 100) + '%' }} />
      </div>
    </div>

    {/*<div className={ 'sliders' }>*/ }
    {/*  <div className={ 'power-slider-wrapper' }>*/ }
    {/*    <Input*/ }
    {/*      max={ 1 }*/ }
    {/*      min={ -1 }*/ }
    {/*      value={ 0 }*/ }
    {/*      step={ 0.001 }*/ }
    {/*      name={ 'left' }*/ }
    {/*      type={ 'range' }*/ }
    {/*      className={ 'power-slider left' }*/ }
    {/*    />*/ }
    {/*  </div>*/ }
    {/*  <div className={ 'power-slider-wrapper right' }>*/ }
    {/*    <Input*/ }
    {/*      max={ 1 }*/ }
    {/*      min={ -1 }*/ }
    {/*      value={ 0 }*/ }
    {/*      step={ 0.001 }*/ }
    {/*      name={ 'right' }*/ }
    {/*      type={ 'range' }*/ }
    {/*      className={ 'power-slider' }*/ }
    {/*    />*/ }
    {/*  </div>*/ }
    {/*</div>*/ }
  </>
}
