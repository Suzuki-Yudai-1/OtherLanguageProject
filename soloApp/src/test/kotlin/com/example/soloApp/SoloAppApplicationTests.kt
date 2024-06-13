package com.example.soloApp

import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.CoreMatchers.hasItem
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus
import org.springframework.test.context.jdbc.Sql

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/inseret_test_data.sql")
class SoloAppApplicationTests (
	@Autowired val restTemplate: TestRestTemplate,
	@LocalServerPort val port: Int
){

	@Test
	fun contextLoads() {
	}
	@Test
	fun `first test`() {
		fun `最初のテスト`() {
			assertThat(1+2, equalTo(3))
		}
	}
	@Test
	fun `GETリクエストはOKステータスを返す`() {
		// localhost/todos に GETリクエストを発行する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/goods", String::class.java)
		// レスポンスのステータスコードは OK である。
		assertThat(response.statusCode, equalTo(HttpStatus.OK))
	}
	@Test
	fun `GETリクエストはGoodsオブジェクトのリストを返す`() {
		val response = restTemplate.getForEntity("http://localhost:$port/api/goods", Array<Goods>::class.java)
		val goods = response.body!!
		println("##########################################")
		println(goods[0])
		assertThat(goods.size, equalTo(2))
		assertThat(goods[0].id, equalTo(1))
		assertThat(goods[0].name, equalTo("掃除機"))
		assertThat(goods[0].price, equalTo(1200))
		assertThat(goods[0].description, equalTo("テスト1"))
		assertThat(goods[0].condition, equalTo("新品未使用"))
	}
	@Test
	fun `POSTリクエストはTodoオブジェクトを格納する`() {
		// localhost/todos に GETリクエストを送り、レスポンスを Todoオブジェクトの配列として解釈する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/goods", Array<Goods>::class.java);
		// このときのレスポンスを todos1 として記憶。
		val goods1 = response.body!!;
		println("##########################################")
		println(goods1[1])
		// localhost/todos に POSTリクエストを送る。このときのボディは {"text": "hello"}
		val request = GoodsRequest("ヘッドホン", 3000, "テスト3", "悪い", "111");
		restTemplate.postForEntity("http://localhost:$port/api/goods", request, Array<Goods>::class.java);
		println("##########################################")
		println(request)
		// ふたたび localhost/todos に GETリクエストを送り、レスポンスを Todoオブジェクトの配列として解釈する。
		val response2 = restTemplate.getForEntity("http://localhost:$port/api/goods", Array<Goods>::class.java);
		// このときのレスポンスを todos2 として記憶。
		val goods2 = response2.body!!;
		println("##########################################")
		println(goods2[2])
		// 配列 goods2 は、配列 todos1 よりも 1 要素だけ多い。
		assertThat(goods2.size, equalTo(goods1.size + 1));
		// 配列 goods2 には "hello" をもつTodoオブジェクトが含まれている。
		assertThat(goods2.map { goods: Goods -> goods.name }, hasItem("ヘッドホン"));
	}
	@Test
	fun `DELITEリクエストはid1のTodoオブジェクトを削除する`() {
		// localhost/todos に GETリクエストを送り、レスポンスを Todoオブジェクトの配列として解釈する。
		val response = restTemplate.getForEntity("http://localhost:$port/api/goods", Array<Goods>::class.java);
		// このときのレスポンスを todos1 として記憶。
		val goods1 = response.body!!;
		println("##########################################")
		println(goods1.size)
		// localhost/todos に deleteリクエストを送る。このときのボディは {"text": "hello"}
		restTemplate.delete("http://localhost:$port/api/goods/{id}", 1);
		// ふたたび localhost/todos に GETリクエストを送り、レスポンスを Todoオブジェクトの配列として解釈する。
		val response2 = restTemplate.getForEntity("http://localhost:$port/api/goods", Array<Goods>::class.java);
		// このときのレスポンスを todos2 として記憶。
		val goods2 = response2.body!!;
		println("##########################################")
		println(goods2.size)
		// 配列 goods2 は、配列 todos1 よりも 1 要素だけ多い。
		assertThat(goods2.size, equalTo(goods1.size - 1));
	}
}
