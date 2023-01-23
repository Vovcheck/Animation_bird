const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// ASSET_MANAGER.queueDownload("./crow.png");
ASSET_MANAGER.queueDownload("./bird.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Bird(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
