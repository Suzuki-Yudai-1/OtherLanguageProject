package com.example.soloApp

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping
class SoloController (@Autowired val soloRepository: SoloRepository) {

    @CrossOrigin
    @GetMapping("/api/goods")
    fun getGoods(): Array<Goods> {
        return soloRepository.fetchGoods()
    }

    @PostMapping("/api/goods")
    fun saveGoods(@RequestBody goodsRequest: GoodsRequest) {
        return soloRepository.saveGoods(goodsRequest)
    }

    @DeleteMapping("api/goods/{id}")
    fun deleteGoods(@PathVariable("id") id: Long){
        return soloRepository.deleteGoods(id)
    }
}
