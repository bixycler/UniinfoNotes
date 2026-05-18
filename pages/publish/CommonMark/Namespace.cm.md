- # Name Lists <a class="logseq-meta" id="676e5861-1220-40e4-9546-e319e17df1aa" data-collapsed="true" ></a>
	- query-table:: false <a class="logseq-meta" data-collapsed="true" ></a>
	  #+BEGIN_QUERY
	  <br>{:title [:h2 "List of Composite Names"]
	   <br>:inputs [ 
	    <br>[:block/uuid #uuid "6699e4db-2e75-4427-94bb-96dfe0367dd1"] ; Complement:
	    <br>[:block/uuid #uuid "6699ea73-dc77-4227-a293-b501f2eb1759"] ; Dual:
	    <br>[:block/uuid #uuid "6699e5f2-7788-46c7-8233-87699a65ca30"] ; Whole:
	    <br>[:block/uuid #uuid "6699eb54-ce9e-4472-a784-c59ffd47f02b"] ; Complementary components:
	   <br>]
	   <br>:query [
	    <br>:find (pull ?b [*])
	    <br>:in $ ?comp ?dual ?whole ?comps
	    <br>:where
	     <br>(or 
	      <br>[?b :block/refs ?comp]
	      <br>[?b :block/refs ?dual]
	      <br>[?b :block/refs ?whole]
	      <br>[?b :block/refs ?comps]
	     <br>)
	   <br>] ; end query
	   <br>:remove-block-children? false
	   <br>:result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  <br>}
	  #+END_QUERY
	- query-table:: true
	  <br>query-properties:: [:block :page] <a class="logseq-meta" data-collapsed="true" ></a>
	  #+BEGIN_QUERY
	  <br>{:title [:h2 "List of Names with Description or Alias"]
	   <br>:inputs [ 
	    <br>[:block/uuid #uuid "6651ecba-793d-43c5-8020-a9f260b032d8"] ; Description:
	    <br>[:block/uuid #uuid "665c9af1-1ce2-461c-af33-671690618c8f"] ; Alias:
	    <br>[:block/uuid #uuid "665c9af1-1ce2-461c-af33-671690618c8f"] ; alias of
	   <br>]
	   <br>:query [
	    <br>:find (pull ?b [*])
	    <br>:in $ ?desc ?alias ?aliasof
	    <br>:where
	     <br>(or-join [?b ?desc ?alias ?aliasof]
	      <br>(and
	       <br>[?descb :block/parent ?b]
	       <br>[?descb :block/refs ?desc]
	      <br>)
	      <br>[?b :block/refs ?alias]
	      <br>[?b :block/refs ?aliasof]
	     <br>)
	   <br>] ; end query
	   <br>:remove-block-children? false
	   <br>:result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  <br>}
	  #+END_QUERY
	-  <a class="logseq-meta" id="676e8305-edc2-4379-a6f4-e7d9cc5ef765" data-collapsed="true" ></a>
	  #+BEGIN_QUERY
	  {:title [:h2 "List of Topics with Discussion"]
	   <br>:inputs [ [:block/uuid #uuid "665359ff-79f1-4669-b10b-f2b0e633a7c1"] ]
	   <br>:query [
	    <br>:find (pull ?b [*])
	    <br>:in $ ?disc
	    <br>:where
	     <br>[?discb :block/parent ?b]
	     <br>[?discb :block/refs ?disc]
	   <br>] ; end query
	   <br>;:remove-block-children? false
	   <br>;:result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  <br>}
	  #+END_QUERY
- # Elements <a class="logseq-meta" id="66533703-505d-432d-8368-6058eefb45f6" data-collapsed="true" ></a>
	- Attribute: <a class="logseq-meta" id="66600918-a37f-46cb-810e-837aa5e89771" ></a>
		- Name: <a class="logseq-meta" id="665ca48e-f7c1-4541-b5cf-486d86b02997" ></a>
		  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">name</span>](Mind%20Jungle.cm.md#665cab38-f8e8-472e-b0a1-60776d492835)
			- name of <a class="logseq-meta" id="665ca495-93b4-47d4-a022-ce511b021a3d" ></a>
			- Alias: <a class="logseq-meta" id="665359e4-4597-4775-b849-f9acbb98960a" ></a>
				- alias of <a class="logseq-meta" id="665c9af1-1ce2-461c-af33-671690618c8f" ></a>
			- Etymology: <a class="logseq-meta" id="669a1e5f-734c-41c1-bf1c-21813b6e81d8" ></a>
			- Noun: <a class="logseq-meta" id="66c80d5c-181f-4f06-a285-0624a65e9951" ></a>
				- noun of <a class="logseq-meta" id="66c80dde-a097-4744-8af8-c6e26dcfdda2" ></a>
			- Verb: <a class="logseq-meta" id="66c80da7-c0e8-46d2-85e5-71318fd44eff" ></a>
				- verb of <a class="logseq-meta" id="66c80dfd-95e2-4b5a-bd56-06e8307e81ca" ></a>
			- Adjective: <a class="logseq-meta" id="66c80da9-4cfb-4de7-b83d-8b70665207bf" ></a>
				- adjective of <a class="logseq-meta" id="66c80e01-002b-42ae-9c60-49bf3fc6e159" ></a>
			- Plural: <a class="logseq-meta" id="68dfc116-5dc8-41a1-b448-b2e2ddc80068" ></a>
				- plural of <a class="logseq-meta" id="68dfc11b-c552-4a41-b4bb-0737db0f3f94" ></a>
		- Description: <a class="logseq-meta" id="6651ecba-793d-43c5-8020-a9f260b032d8" ></a>
		  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">description</span>](Mind%20Jungle.cm.md#66532914-003a-4bbb-9e97-6f1c87170d7d)
			- Pronunciation: <a class="logseq-meta" id="66f3c28a-a18f-4cca-90d6-c086ac7fccdf" ></a>
		- Commentaries: <a class="logseq-meta" id="665359ff-79f1-4669-b10b-f2b0e633a7c1" ></a>
		- References: <a class="logseq-meta" id="66c33468-23d5-44d7-955e-6711cb608157" ></a>
		- Expressions: <a class="logseq-meta" id="66e4299e-0af8-47ee-adae-c13fb57fd15d" ></a>
		- Examples: <a class="logseq-meta" id="66725725-f76a-4328-b162-f469b87e871b" ></a>
		- Variations: <a class="logseq-meta" id="671b18a8-ac11-4930-bed3-645c0cc983a8" ></a>
	- Property: <a class="logseq-meta" id="66600918-67d0-429b-af78-f804ea65d9cc" ></a>
		- Form: <a class="logseq-meta" id="665ca47c-476a-4bef-b982-d9a31a669fb1" ></a>
		  <br>[name of](#665ca495-93b4-47d4-a022-ce511b021a3d) [<span class="link-h2">form</span>](Uniinfo.cm.md#665ca429-84e3-49ff-921e-c07d19cd99ba)
			- form of <a class="logseq-meta" id="665ca480-5ac8-4728-a331-2f68b48759d1" ></a>
			- Formula: <a class="logseq-meta" id="669dfa9a-3322-4669-9d00-9093a7b14b38" ></a>
		- Plaintext: <a class="logseq-meta" id="66600918-729f-4c23-97fe-577353cb8b53" ></a>
		- Subprop: <a class="logseq-meta" id="6651ea73-78b4-4c1a-b052-b2ea9555b6f6" ></a>
	- Relation: <a class="logseq-meta" id="66600918-367c-413c-863d-2cf11a89c437" ></a>
	  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">relation</span>](Uniinfo.cm.md#667d0b78-fff6-49bc-90d5-165648ed56d3)
		- from <a class="logseq-meta" id="66600918-9f27-44c2-8188-f043c244710c" ></a>
			- ⇐ <a class="logseq-meta" id="66602f61-b849-41a9-bdb8-ec91b96adaec" ></a>
			- Cause: <a class="logseq-meta" id="66ae15d2-e2dd-443d-a666-c3b244fb6603" ></a>
				- because <a class="logseq-meta" id="666022fc-5a51-4e87-ba7c-6f67a0cf19de" ></a>
					- because of <a class="logseq-meta" id="66600918-3d55-4bad-bd42-4e94708efc5e" ></a>
				- Reason:
		- to <a class="logseq-meta" id="665caf87-7dd9-4e9e-9ebc-7df259e7d711" ></a>
			- ⇒ <a class="logseq-meta" id="66602f68-e23f-4b24-921e-b1a9fc0cc731" ></a>
			- ➡️ <a class="logseq-meta" id="6687cfbe-9a41-4cb9-883c-c4655b8fa96c" ></a>
			- So, <a class="logseq-meta" id="665dc545-151a-485a-84b7-1310fef5151c" ></a>
			- Thus, <a class="logseq-meta" id="66600918-5cb0-4833-9e52-acf2b17441c0" ></a>
			- Hence, <a class="logseq-meta" id="66600918-063a-4e31-bddc-cb138113a66b" ></a>
			- Therefore, <a class="logseq-meta" id="66600918-9cef-4a33-bdeb-3b64d71c7034" ></a>
			- moved to <a class="logseq-meta" id="680a04eb-125e-4e9e-b691-3b7be523359c" ></a>
		- Opposite: <a class="logseq-meta" id="691ae2bd-a60f-4db2-8132-bf54e9dee1b0" ></a>
			- opposite of <a class="logseq-meta" id="691ae2c3-74aa-4b95-afb6-ed174be00978" ></a>
	- Composite: <a class="logseq-meta" id="6652048c-27b3-47b6-84e5-25af8d9ce801" ></a>
	  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">composite</span>](Uniinfo.cm.md#66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5)
		- Components: <a class="logseq-meta" id="66532ccc-ae21-4940-8714-715060d6bd90" ></a>
		  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">component</span>](Uniinfo.cm.md#66532bb2-7680-461b-80b2-71fc96c89fb9)
		- Complementarity: <a class="logseq-meta" id="667bf816-d1c8-4ac3-b315-764c14bfbb1f" ></a>
		  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">complement</span>](Uniinfo.cm.md#66c8941d-6427-4e5c-9009-3af349500d7b)
			- Complement: <a class="logseq-meta" id="6699e4db-2e75-4427-94bb-96dfe0367dd1" ></a>
				- Dual: <a class="logseq-meta" id="6699ea73-dc77-4227-a293-b501f2eb1759" ></a>
			- Whole: <a class="logseq-meta" id="6699e5f2-7788-46c7-8233-87699a65ca30" ></a>
			  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">whole</span>](Uniinfo.cm.md#66c8046e-c5fe-4f27-b3cf-40f5f39b646b)
				- Complementary components: <a class="logseq-meta" id="6699eb54-ce9e-4472-a784-c59ffd47f02b" ></a>
	- Website: <a class="logseq-meta" id="66600918-bde2-49ca-8f91-740fb282ea13" ></a>
		- Official website: <a class="logseq-meta" id="665359c3-61fd-4858-a117-ecbcd6fbc9ea" ></a>
	- Wiki: <a class="logseq-meta" id="665359c0-a89a-41b5-9f28-503f79107a08" data-collapsed="true" ></a>
	  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">wiki</span>](Mind%20Jungle.cm.md#66536a32-fddd-465f-a47f-fa8e0ea9c8db)
	- Git: <a class="logseq-meta" id="665f1a5c-6c98-4785-a177-3cd01507595d" ></a>
	- Plugin: <a class="logseq-meta" id="66535a44-8a13-4d5a-808e-10baa97ebaf0" ></a>
	- Theme: <a class="logseq-meta" id="665dcac9-5698-496c-9a14-c5c0425d0998" ></a>
	- History: <a class="logseq-meta" id="6667abd2-14eb-4145-b9e3-e6f3037b3117" data-collapsed="true" ></a>
	  <br>[Form:](#665ca47c-476a-4bef-b982-d9a31a669fb1) [<span class="link-h2">History</span>](Mind%20Jungle.cm.md#6667ac3c-8fff-43aa-92ac-fca2002e58f4)
	- File: <a class="logseq-meta" id="666a539d-499f-43c0-8b2e-74818cc3a0f5" ></a>
	- Screenshot:
