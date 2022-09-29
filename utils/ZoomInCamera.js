const Controls = ({ zoomType }) => {
  const { controls } = useThree();

  //zoom function
  const onZoom = useCallback(
    (factor) => {
      console.log(controls);
      if (!controls) return;
      controls.object.size = controls.object.size * factor;
      controls.object.position.x = controls.object.position.x * factor;
      controls.object.position.y = controls.object.position.y * factor;
      controls.object.position.z = controls.object.position.z * factor;
      controls.target = new THREE.Vector3(
        controls.object.position.x,
        controls.object.position.y,
        0
      );
      controls.position0.set(0, 0, 5);
    },
    [controls]
  );

  useEffect(() => {
    if (zoomType === 1) return;
    let factor;
    if (zoomType < 1) {
      factor = 1.1;
    } else {
      factor = 0.9;
    }
    onZoom(factor);
  }, [zoomType, onZoom]);

  return <OrbitControls enabled makeDefault target={[0, 0, 0]} />;
};
