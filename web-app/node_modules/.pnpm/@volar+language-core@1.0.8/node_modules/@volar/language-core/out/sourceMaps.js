Object.defineProperty(exports, "__esModule", { value: true });
exports.Teleport = void 0;
const SourceMaps = require("@volar/source-map");
class Teleport extends SourceMaps.SourceMapBase {
    *findTeleports(start, filter) {
        for (const mapped of this.toGeneratedOffsets(start)) {
            if (!filter || filter(mapped[1].data.toSourceCapabilities)) {
                yield mapped[0];
            }
        }
        for (const mapped of this.toSourceOffsets(start)) {
            if (!filter || filter(mapped[1].data.toGenedCapabilities)) {
                yield mapped[0];
            }
        }
    }
}
exports.Teleport = Teleport;
//# sourceMappingURL=sourceMaps.js.map