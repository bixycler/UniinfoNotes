# Name Lists
id:: 676e5861-1220-40e4-9546-e319e17df1aa
collapsed:: true
	- collapsed:: true
	  #+BEGIN_QUERY
	  {:title [:h2 "List of Composite Names"]
	   :inputs [ 
	    [:block/uuid #uuid "6699e4db-2e75-4427-94bb-96dfe0367dd1"] ; Complement:
	    [:block/uuid #uuid "6699ea73-dc77-4227-a293-b501f2eb1759"] ; Dual:
	    [:block/uuid #uuid "6699e5f2-7788-46c7-8233-87699a65ca30"] ; Whole:
	    [:block/uuid #uuid "6699eb54-ce9e-4472-a784-c59ffd47f02b"] ; Complementary components:
	   ]
	   :query [
	    :find (pull ?b [*])
	    :in $ ?comp ?dual ?whole ?comps
	    :where
	     (or 
	      [?b :block/refs ?comp]
	      [?b :block/refs ?dual]
	      [?b :block/refs ?whole]
	      [?b :block/refs ?comps]
	     )
	   ] ; end query
	   :remove-block-children? false
	   :result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  }
	  #+END_QUERY
	- query-table:: true
	  query-properties:: [:block :page]
	  collapsed:: true
	  #+BEGIN_QUERY
	  {:title [:h2 "List of Names with Description or Alias"]
	   :inputs [ 
	    [:block/uuid #uuid "6651ecba-793d-43c5-8020-a9f260b032d8"] ; Description:
	    [:block/uuid #uuid "665c9af1-1ce2-461c-af33-671690618c8f"] ; Alias:
	    [:block/uuid #uuid "665c9af1-1ce2-461c-af33-671690618c8f"] ; alias of
	   ]
	   :query [
	    :find (pull ?b [*])
	    :in $ ?desc ?alias ?aliasof
	    :where
	     (or-join [?b ?desc ?alias ?aliasof]
	      (and
	       [?descb :block/parent ?b]
	       [?descb :block/refs ?desc]
	      )
	      [?b :block/refs ?alias]
	      [?b :block/refs ?aliasof]
	     )
	   ] ; end query
	   :remove-block-children? false
	   :result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  }
	  #+END_QUERY
	- id:: 676e8305-edc2-4379-a6f4-e7d9cc5ef765
	  collapsed:: true
	  #+BEGIN_QUERY
	  {:title [:h2 "List of Topics with Discussion"]
	   :inputs [ [:block/uuid #uuid "665359ff-79f1-4669-b10b-f2b0e633a7c1"] ]
	   :query [
	    :find (pull ?b [*])
	    :in $ ?disc
	    :where
	     [?discb :block/parent ?b]
	     [?discb :block/refs ?disc]
	   ] ; end query
	   ;:remove-block-children? false
	   ;:result-transform (fn [r] (map (fn [m] (assoc m :block/collapsed? true)) r))
	  }
	  #+END_QUERY
- # Elements
  id:: 66533703-505d-432d-8368-6058eefb45f6
  collapsed:: true
	- Attribute:
	  id:: 66600918-a37f-46cb-810e-837aa5e89771
		- Name:
		  id:: 665ca48e-f7c1-4541-b5cf-486d86b02997
		  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((665cab38-f8e8-472e-b0a1-60776d492835))
			- name of
			  id:: 665ca495-93b4-47d4-a022-ce511b021a3d
			- Alias:
			  id:: 665359e4-4597-4775-b849-f9acbb98960a
				- alias of
				  id:: 665c9af1-1ce2-461c-af33-671690618c8f
			- Etymology:
			  id:: 669a1e5f-734c-41c1-bf1c-21813b6e81d8
			- Noun:
			  id:: 66c80d5c-181f-4f06-a285-0624a65e9951
				- noun of
				  id:: 66c80dde-a097-4744-8af8-c6e26dcfdda2
			- Verb:
			  id:: 66c80da7-c0e8-46d2-85e5-71318fd44eff
				- verb of
				  id:: 66c80dfd-95e2-4b5a-bd56-06e8307e81ca
			- Adjective:
			  id:: 66c80da9-4cfb-4de7-b83d-8b70665207bf
				- adjective of
				  id:: 66c80e01-002b-42ae-9c60-49bf3fc6e159
		- Description:
		  id:: 6651ecba-793d-43c5-8020-a9f260b032d8
		  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((66532914-003a-4bbb-9e97-6f1c87170d7d))
			- Pronunciation:
			  id:: 66f3c28a-a18f-4cca-90d6-c086ac7fccdf
		- Commentaries:
		  id:: 665359ff-79f1-4669-b10b-f2b0e633a7c1
		- References:
		  id:: 66c33468-23d5-44d7-955e-6711cb608157
		- Expressions:
		  id:: 66e4299e-0af8-47ee-adae-c13fb57fd15d
		- Examples:
		  id:: 66725725-f76a-4328-b162-f469b87e871b
		- Variations:
		  id:: 671b18a8-ac11-4930-bed3-645c0cc983a8
	- Property:
	  id:: 66600918-67d0-429b-af78-f804ea65d9cc
		- Form:
		  id:: 665ca47c-476a-4bef-b982-d9a31a669fb1
		  ((665ca495-93b4-47d4-a022-ce511b021a3d)) ((665ca429-84e3-49ff-921e-c07d19cd99ba))
			- form of
			  id:: 665ca480-5ac8-4728-a331-2f68b48759d1
			- Formula:
			  id:: 669dfa9a-3322-4669-9d00-9093a7b14b38
		- Plaintext:
		  id:: 66600918-729f-4c23-97fe-577353cb8b53
		- Subprop:
		  id:: 6651ea73-78b4-4c1a-b052-b2ea9555b6f6
	- Relation:
	  id:: 66600918-367c-413c-863d-2cf11a89c437
	  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((667d0b78-fff6-49bc-90d5-165648ed56d3))
		- from
		  id:: 66600918-9f27-44c2-8188-f043c244710c
			- ⇐
			  id:: 66602f61-b849-41a9-bdb8-ec91b96adaec
			- Cause:
			  id:: 66ae15d2-e2dd-443d-a666-c3b244fb6603
				- because
				  id:: 666022fc-5a51-4e87-ba7c-6f67a0cf19de
					- because of
					  id:: 66600918-3d55-4bad-bd42-4e94708efc5e
				- Reason:
		- to
		  id:: 665caf87-7dd9-4e9e-9ebc-7df259e7d711
			- ⇒
			  id:: 66602f68-e23f-4b24-921e-b1a9fc0cc731
			- So,
			  id:: 665dc545-151a-485a-84b7-1310fef5151c
			- Thus,
			  id:: 66600918-5cb0-4833-9e52-acf2b17441c0
			- Hence,
			  id:: 66600918-063a-4e31-bddc-cb138113a66b
			- Therefore,
			  id:: 66600918-9cef-4a33-bdeb-3b64d71c7034
			- moved to
			  id:: 680a04eb-125e-4e9e-b691-3b7be523359c
	- Composite:
	  id:: 6652048c-27b3-47b6-84e5-25af8d9ce801
	  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((66532bc2-a18e-43ab-86ac-a0f0f7dcbbb5))
		- Component:
		  id:: 66532ccc-ae21-4940-8714-715060d6bd90
		  collapsed:: true
		  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((66532bb2-7680-461b-80b2-71fc96c89fb9))
		- Complementarity:
		  id:: 667bf816-d1c8-4ac3-b315-764c14bfbb1f
			- Complement:
			  id:: 6699e4db-2e75-4427-94bb-96dfe0367dd1
				- Dual:
				  id:: 6699ea73-dc77-4227-a293-b501f2eb1759
			- Whole:
			  id:: 6699e5f2-7788-46c7-8233-87699a65ca30
			  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((66c8046e-c5fe-4f27-b3cf-40f5f39b646b))
				- Complementary components:
				  id:: 6699eb54-ce9e-4472-a784-c59ffd47f02b
	- Website:
	  id:: 66600918-bde2-49ca-8f91-740fb282ea13
		- Official website:
		  id:: 665359c3-61fd-4858-a117-ecbcd6fbc9ea
	- Wiki:
	  id:: 665359c0-a89a-41b5-9f28-503f79107a08
	  collapsed:: true
	  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((66536a32-fddd-465f-a47f-fa8e0ea9c8db))
	- Git:
	  id:: 665f1a5c-6c98-4785-a177-3cd01507595d
	- Plugin:
	  id:: 66535a44-8a13-4d5a-808e-10baa97ebaf0
	- Theme:
	  id:: 665dcac9-5698-496c-9a14-c5c0425d0998
	- History:
	  id:: 6667abd2-14eb-4145-b9e3-e6f3037b3117
	  collapsed:: true
	  ((665ca47c-476a-4bef-b982-d9a31a669fb1)) ((6667ac3c-8fff-43aa-92ac-fca2002e58f4))
	- File:
	  id:: 666a539d-499f-43c0-8b2e-74818cc3a0f5
	- Screenshot:
	  id:: 666a697a-6f40-4749-ab5b-03c82aeda1ee