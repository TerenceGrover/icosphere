'use client';
import Spline from '@splinetool/react-spline';

export default function Rendu() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
      <Spline scene="https://prod.spline.design/1JHa9kWbS-mIedCf/scene.splinecode" />
    </div>
  );
}
