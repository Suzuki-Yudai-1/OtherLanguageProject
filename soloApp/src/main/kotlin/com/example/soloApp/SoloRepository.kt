package com.example.soloApp

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Component
class SoloRowMapper : RowMapper<Goods> {
    override fun mapRow(rs: ResultSet, rowNum: Int): Goods{
        return Goods(rs.getLong(1), rs.getString(2), rs.getLong(3), rs.getString(4), rs.getString(5), rs.getString(6))
    }
}

@Repository
class SoloRepository (@Autowired val jdbcTemplate: JdbcTemplate, @Autowired val soloRowMapper: SoloRowMapper){

    fun fetchGoods(): Array<Goods>{
        val goods = jdbcTemplate.query("SELECT id, name, price, description, condition, image FROM goods", soloRowMapper)
        return goods.toTypedArray()
    }

    fun saveGoods(goodsRequest: GoodsRequest) {
        jdbcTemplate.update("INSERT INTO goods (name, price, description, condition, image) VALUES (?, ?, ?, ?, ?)", goodsRequest.name, goodsRequest.price, goodsRequest.description, goodsRequest.condition, goodsRequest.image)
    }

    fun deleteGoods(id: Long) {
        jdbcTemplate.update("DELETE FROM Goods WHERE id = ?", id)
    }
}