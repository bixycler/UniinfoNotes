- Global ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) ![global/config.edn](../assets/logseq/global/config.edn)
  id:: 66fe86b8-f17e-4b3f-b27f-213b3500146f
	- This global config file applies a configuration to all graphs.
	- This global config file is placed in the [home folder](((66fb7680-e670-447d-baa4-279bed18e706))) `/.logseq/config/config.edn`.
	- ((66faa5f7-af4f-4ca6-9621-56ab8dadbe94)) overrides config keys in this global file except for maps which are merged.
- Local ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) ![config.edn](../assets/logseq/config.edn)
  id:: 66faa5f7-af4f-4ca6-9621-56ab8dadbe94
	- This file is to catch the configs set by Settings GUI only.
	- All configs are moved to the ((66fe86b8-f17e-4b3f-b27f-213b3500146f)).
		- Some configs for graph export must be copied back to the local config, because the graph export doesn't apply the global config (why not ?!?)
- [App (Electron) config](((6710c556-1259-4fd5-a9d0-02216274a852))) ((666a539d-499f-43c0-8b2e-74818cc3a0f5)) ![config/configs.edn](../assets/logseq/config/configs.edn)
	- This file is managed by Logseq: We can edit it manually and the values will be picked up but its format will be reset.