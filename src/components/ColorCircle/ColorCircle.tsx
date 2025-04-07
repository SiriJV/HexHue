import React, { useEffect, useRef } from 'react';

interface Segment {
  percent: number;
  color: string;
}

interface HexHueCircleProps {
  size?: number;
  targetColor?: string;
}

const HexHueCircle: React.FC<HexHueCircleProps> = ({
  size = 200,
  targetColor = '#a855f7',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;

    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = targetColor;
    ctx.fill();

    const segments: Segment[] = [
      { percent: 0.5, color: '#cccccc' },
      { percent: 0.3, color: '#aaaaaa' },
      { percent: 0.2, color: '#888888' },
    ];

    let startAngle = Math.PI;

    segments.forEach(segment => {
      const endAngle = startAngle + Math.PI * segment.percent;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();
      startAngle = endAngle;
    });
  }, [size, targetColor]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default HexHueCircle;
