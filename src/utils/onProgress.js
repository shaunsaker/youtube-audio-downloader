export default function onProgress(progress) {
  console.log(`${Math.round(progress.progress.percentage)}%`);
}
