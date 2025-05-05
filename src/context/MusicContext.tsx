import TrackPlayer, { Capability, AppKilledPlaybackBehavior, RepeatMode } from 'react-native-track-player';

// Set up the player
export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
    });
  } catch (error) {
    console.error('Error setting up player:', error);
  }
}

// Add track to the player
export async function addTracks() {
  try {
    await TrackPlayer.add([
      {
        id: '1',
        url: require('../assets/audio/background.mp3'), // Path to your audio file
        title: 'Background Music',
        artist: 'Your Artist',
        // artwork: require('../assets/images/artwork.png'),
      },
    ]);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  } catch (error) {
    console.error('Error adding tracks:', error);
  }
}

// Play background music
export async function playBackgroundMusic() {
  try {
    await TrackPlayer.play();  // Start playback
    console.log('Background music is playing');
  } catch (error) {
    console.error('Error playing background music:', error);
  }
}

// Pause background music
export async function pauseBackgroundMusic() {
  try {
    await TrackPlayer.pause();  // Pause playback
    console.log('Background music is paused');
  } catch (error) {
    console.error('Error pausing background music:', error);
  }
}
