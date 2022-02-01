<script>
    const version = '1.2';
</script>

<div class="menuBox">
    <div class="soloGame">Start Solo Game</div>
    <div>Campaign</div>
    <div>Matchmaking</div>
    <div>Custom Games</div>
    <div>Forge</div>
    <div>Theater</div>
    <div class="version">{version}</div>
    <div>Settings Friends</div>
    <div class="placeholder"></div>
</div>

<style>
    * {
        color: white;
    }
    .menuBox {
        background-color: rgba(12,17,42, 0.8);
        width: 400px;
        position: absolute;
        bottom: 0;
        left: 100px;
    }
    .menuBox > div {
        display: flex;
        align-content: center;
        letter-spacing: 2px;
        font-size: 2em;
        text-transform: uppercase;
        font-family: 'Open Sans Condensed', sans-serif;
        padding-left: 10px;
    }
    .menuBox > div:hover:not(:nth-last-child(-n+3)) {
        background-color: rgba(104,62,19, 0.7);
    }
    .soloGame {
        border-bottom: 1px solid rgba(236, 236, 236, 0.3);
    }
    .version {
        justify-content: right;
        padding-right: 5px;
        color: rgba(236, 236, 236, 0.3);
    }
    .placeholder {
        height: 50px;
    }
</style>